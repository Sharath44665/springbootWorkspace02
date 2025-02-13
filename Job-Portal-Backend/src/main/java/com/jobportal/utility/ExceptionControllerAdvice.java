package com.jobportal.utility;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorInfo> generalException(Exception exception) {
        ErrorInfo error = new ErrorInfo(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> validatorExceptionHandler(Exception exception) {
        String msg = "";
        if (exception instanceof MethodArgumentNotValidException manvException) {
            msg = manvException.getAllErrors().stream().map(ObjectError::getDefaultMessage).collect(Collectors.joining(", "));
        }
        else {
            ConstraintViolationException cvException = (ConstraintViolationException) exception;
            msg = cvException.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(Collectors.joining(", "));

        }
        ErrorInfo error = new ErrorInfo(msg, HttpStatus.BAD_REQUEST.value(), LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
