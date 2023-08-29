package com.goldenspace.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServiceResponse<T> {
    protected boolean success;
    protected List<String> messages;
    protected T data;

    public static <T> ServiceResponse<T> success(T data) {
        ServiceResponse<T> response = new ServiceResponse<T>();
        response.setSuccess(true);
        response.setData(data);
        return response;
    }

    public static <T> ServiceResponse<T> error(String error) {
        ServiceResponse<T> response = new ServiceResponse<T>();
        response.setSuccess(false);
        response.setMessages(List.of(error)); 
        return response;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    
}
