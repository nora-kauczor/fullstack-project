package org.example.backend;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ErrorMessage handleGlobalException(Exception e) {
        ErrorMessage errorMessage = new ErrorMessage("An error has occurred" + e.getMessage());
        return errorMessage;
    }

}
