package com.ajxlk.learnOnline.response;

import org.springframework.data.domain.Page;

import java.util.*;

public class RestResponse {

    private int code;

    private String msg;

    private List<Object> entities;

    private Map<String,Object> data;

    private Date timestamp;

    public RestResponse() {
        entities = new ArrayList<Object>();
        data = new HashMap<String,Object>();
    }

    public void setRestCode(RestCode restCode) {
        this.code = restCode.getCode();
        this.msg = restCode.getMsg();
    }

    public void setPageData(Page<?> page) {
        this.addData("total",page.getTotalElements());
        this.addData("totalPages",page.getTotalPages());
        this.addData("number",page.getNumber());
        this.addData("size",page.getSize());
        this.addData("numberOfElements",page.getNumberOfElements());
        this.setEntities(page.getContent());
    }

    public void addEntity(Object entity) {
        entities.add(entity);
    }

    public void addData(Object dataObj) {
        data.put(dataObj.getClass().toString(), dataObj);
    }

    public void addData(String name,Object dataObj) {
        data.put(name, dataObj);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public List<Object> getEntities() {
        return entities;
    }

    public void setEntities(List entities) {
        this.entities.addAll(entities);
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
