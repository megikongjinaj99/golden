package com.goldenspace.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.goldenspace.dao.CategoryRepository;
import com.goldenspace.dto.ServiceResponse;
import com.goldenspace.entity.Category;

@Service
@Transactional
public class CategoryService {
    protected CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public ServiceResponse<List<Category>> getAll() {
        return ServiceResponse.success(categoryRepository.findAll());
    }

    public ServiceResponse<Category> getById(Long id) {
        return ServiceResponse.success(categoryRepository.findById(id).get());
    }




}
