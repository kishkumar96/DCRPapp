package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Project;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Project} entity.
 */
public interface ProjectSearchRepository extends ElasticsearchRepository<Project, Long> {
}
