package com.ajxlk.learnOnline.user.model;

public class Stu {
    private Integer stuid;

    private String stuname;

    private String stupwd;

    private String stuiconurl;

    public Integer getStuid() {
        return stuid;
    }

    public void setStuid(Integer stuid) {
        this.stuid = stuid;
    }

    public String getStuname() {
        return stuname;
    }

    public void setStuname(String stuname) {
        this.stuname = stuname == null ? null : stuname.trim();
    }

    public String getStupwd() {
        return stupwd;
    }

    public void setStupwd(String stupwd) {
        this.stupwd = stupwd == null ? null : stupwd.trim();
    }

    public String getStuiconurl() {
        return stuiconurl;
    }

    public void setStuiconurl(String stuiconurl) {
        this.stuiconurl = stuiconurl == null ? null : stuiconurl.trim();
    }
}