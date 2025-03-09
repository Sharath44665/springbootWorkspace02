package com.jobportal.entity;

import com.jobportal.dto.NotificationDto;
import com.jobportal.dto.NotificationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "notification")
public class Notification {
    private Long id;
    private Long userId;
    private String message;
    private String action;
    private String route;
    private NotificationStatus status;
    private LocalDateTime timestamp;

    public NotificationDto toDTO(){
        return  new NotificationDto(this.id, this.userId, this.message, this.action, this.route, this.status, this.timestamp);
    }
}
