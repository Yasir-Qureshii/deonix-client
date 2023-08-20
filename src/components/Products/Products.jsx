import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Skeleton,
} from "@mui/material";
import { getProducts } from "../../services/services";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    const { res, err } = await getProducts("/products");
    if (res) {
      setProducts(res);
      setIsLoading(false);
    }
    if (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
  };

  return (
    <Box sx={{ width: "100%", padding: "3%" }}>
      <Typography variant="h4" sx={{ margin: "10px 0" }}>
        Products
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={8} sm={6} md={3} key={index}>
                <div style={{ margin: "20px" }}>
                  <Skeleton variant="rectangular" width={280} height={200} />
                  <Skeleton width="60%" />
                  <Skeleton width="100%" />
                </div>
              </Grid>
            ))
          : products?.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "450px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onClick={() => handleOpenModal(product)}
                >
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="180"
                    object-fit="cover"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography gutterBottom>{product.name}</Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description.substring(0, 50)}.. <br />{" "}
                      <a href="#">View more</a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      fullWidth
                      size="small"
                      onClick={(event) => handleAddToCart(event, product)}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.name}</DialogTitle>
            <DialogContent>
              <CardMedia
                component="img"
                alt={selectedProduct.name}
                image={selectedProduct.image}
              />
              <DialogContentText sx={{ marginTop: "3%" }}>
                {selectedProduct.description}
              </DialogContentText>
              {/* Display other product details as needed */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Products;
