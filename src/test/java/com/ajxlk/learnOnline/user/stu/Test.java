package com.ajxlk.learnOnline.user.stu;

import com.ajxlk.learnOnline.user.dao.AdminMapper;
import com.ajxlk.learnOnline.user.model.Admin;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.Reader;

/**  读取 mybatis 配置文件 完成相应类的增删改查
 * Created by Administrator on 7/14/2017.
 */
public class Test {
    private static SqlSessionFactory sqlSessionFactory;
    private static Reader reader;

    static {
        try {
            reader = Resources.getResourceAsReader("Configuration.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static SqlSessionFactory getSession() {
        return sqlSessionFactory;
    }

    public void selectByPrimaryKey(int userID) {
        SqlSession session = sqlSessionFactory.openSession();
        try {
            AdminMapper adminMapper = session.getMapper(AdminMapper.class);
            Admin admin = adminMapper.selectByPrimaryKey(userID);
            if (admin != null) {
                System.out.println(admin);
        }

        } finally {
            session.close();
        }
    }

    public static void main(String[] args) {
        try {
            Test test = new Test();
            test.selectByPrimaryKey(1);

        } catch (Exception e){
            System.out.println(e.getMessage());
        }

    }

}
