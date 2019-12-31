package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.ParticipantEntry;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link ParticipantEntry} entity.
 */
public interface ParticipantEntrySearchRepository extends ElasticsearchRepository<ParticipantEntry, Long> {
}
