package com.jobportal.service;

import com.jobportal.dto.NotificationDto;
import com.jobportal.entity.Notification;
import com.jobportal.exceptions.JobPortalException;

import java.util.List;

public interface NotificationService {
    public void sendNotification(NotificationDto notificationDto) throws JobPortalException;
    public List<Notification> getUnreadNotifications(Long userId);
    public void readNotifications(Long id) throws JobPortalException;

}
