import React from 'react';
import styled from 'styled-components';
import web from '../../img/web.jpg'
import business from '../../img/team.png'
import app from '../../img/app.webp'
import software from '../../img/software.webp'
import digital from '../../img/digital_marketing.avif'
import marketing from '../../img/marketing.jpg'

// Define some styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const ProductItem = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 50%;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

// Define the component
function StyledComponent () {
  return (
    <Container>
      <Title>Welcome to our shopping site</Title>
      <ProductList>
        <ProductItem>
          <ProductImage src={web} alt="Product 1" />
          <ProductName>Product 1</ProductName>
          <ProductPrice>$19.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src={business} alt="Product 2" />
          <ProductName>Product 2</ProductName>
          <ProductPrice>$29.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src={app} alt="Product 3" />
          <ProductName>Product 3</ProductName>
          <ProductPrice>$39.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src={software} alt="Product 4" />
          <ProductName>Product 4</ProductName>
          <ProductPrice>$49.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src={marketing} alt="Product 5" />
          <ProductName>Product 5</ProductName>
          <ProductPrice>$59.99</ProductPrice>
        </ProductItem>
        <ProductItem>
          <ProductImage src={digital} alt="Product 6" />
          <ProductName>Product 6</ProductName>
          <ProductPrice>$69.99</ProductPrice>
        </ProductItem>
      </ProductList>
    </Container>
  );
}

export default StyledComponent;