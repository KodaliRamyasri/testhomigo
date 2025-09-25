package com.klef.cicd.sdp.service;

import java.util.List;

import com.klef.cicd.sdp.model.Product;

public interface ProductService 
{
   public String addProduct(Product product);
   public List<Product> viewallProducts();
   public Product viewProductById(int pid);
   public List<Product> viewProductsByCategory(String category);
}