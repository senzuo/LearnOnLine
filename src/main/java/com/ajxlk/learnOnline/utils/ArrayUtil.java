package com.ajxlk.learnOnline.utils;

import java.util.ArrayList;
import java.util.List;

public class ArrayUtil {

    public static List<String> arrayStrToList(String str, String splitChar) {
        if (str == null || str.isEmpty()) {
            return new ArrayList<String>();
        }
        String[] split = str.split(splitChar);
        if (split == null || split.length == 0) {
            return new ArrayList<String>();
        }
        List<String> list = new ArrayList<String>(split.length);
        for (int i = 0; i < split.length; i++) {
            if (split[i] == null || split[i].equals(splitChar) || split[i].trim().equals("")) {
                continue;
            }
            list.add(split[i]);
        }
        return list;
    }

    public static List<Long> arrayStrToLongList(String str, String splitChar) {
        List<String> list = arrayStrToList(str, splitChar);
        if (list == null || list.isEmpty()) {
            return new ArrayList<Long>();
        }
        ArrayList<Long> longs = new ArrayList<Long>();
        for (String data : list) {

            longs.add(Long.valueOf(data));
        }
        return longs;
    }


}
