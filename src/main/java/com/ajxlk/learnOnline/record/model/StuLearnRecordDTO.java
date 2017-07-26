package com.ajxlk.learnOnline.record.model;

import com.ajxlk.learnOnline.course.model.Chapter;
import com.ajxlk.learnOnline.course.model.Course;
import com.ajxlk.learnOnline.course.model.Section;

/**  传递学生正在学的课程参数
 * Created by Administrator on 7/26/2017.
 */
public class StuLearnRecordDTO {
    private StuLearnRecord stuLearnRecord;
    private Course course;
    private Chapter chapter;
    private Section section;

    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }

    public StuLearnRecord getStuLearnRecord() {
        return stuLearnRecord;
    }

    public void setStuLearnRecord(StuLearnRecord stuLearnRecord) {
        this.stuLearnRecord = stuLearnRecord;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
