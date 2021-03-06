package sg.edu.nus.comp.cs3219.viz.storage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sg.edu.nus.comp.cs3219.viz.common.entity.Presentation;
import sg.edu.nus.comp.cs3219.viz.common.entity.PresentationSection;

import java.util.List;

@Repository
public interface PresentationSectionRepository extends JpaRepository<PresentationSection, Long> {

    List<PresentationSection> findAllByPresentation(Presentation presentation);
}
