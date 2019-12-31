package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Session;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Session} entity.
 */
public interface SessionSearchRepository extends ElasticsearchRepository<Session, Long> {
}
