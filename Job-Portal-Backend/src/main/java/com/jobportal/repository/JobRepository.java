package com.jobportal.repository;

import com.jobportal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobRepository extends MongoRepository<Job, Long> {
    public List<Job> findByPostedBy(long postedBy);
}
