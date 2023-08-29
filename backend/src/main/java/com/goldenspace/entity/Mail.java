package com.goldenspace.entity;

import java.util.List;

import lombok.Data;

@Data
public class Mail {
    private String mailFrom;
    private String mailTo;
    private String mailCc;
    private String mailBcc;
    private String mailSubject;
    private String mailContent;
    private String contenType;
    private List<Object> attachments;

    public Mail() {
        this.contenType = "text/html";
    }

    public Mail(String mailFrom, String mailTo, String mailSubject, String mailContent) {
        this();
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.mailSubject = mailSubject;
        this.mailContent = mailContent;
    }

    public Mail(String mailFrom, String mailTo, String mailSubject, String mailContent, List<Object> attachments) {
        this(mailFrom, mailTo, mailSubject, mailContent);
        this.attachments = attachments;
    }

    public Mail(String mailFrom, String mailTo, String mailSubject, String mailContent, String contenType, List<Object> attachments) {
        this(mailFrom, mailTo, mailSubject, mailContent, attachments);
        this.contenType = contenType;
    }

    //getters and setters
    public String getMailFrom() {
        return mailFrom;
    }

    public void setMailFrom(String mailFrom) {
        this.mailFrom = mailFrom;
    }

    public String getMailTo() {
        return mailTo;
    }

    public void setMailTo(String mailTo) {
        this.mailTo = mailTo;
    }

    public String getMailCc() {
        return mailCc;
    }

    public void setMailCc(String mailCc) {
        this.mailCc = mailCc;
    }

    public String getMailBcc() {
        return mailBcc;
    }

    public void setMailBcc(String mailBcc) {
        this.mailBcc = mailBcc;
    }

    public String getMailSubject() {
        return mailSubject;
    }

    public void setMailSubject(String mailSubject) {
        this.mailSubject = mailSubject;
    }

    public String getMailContent() {
        return mailContent;
    }

    public void setMailContent(String mailContent) {
        this.mailContent = mailContent;
    }

    public String getContenType() {
        return contenType;
    }

    public void setContenType(String contenType) {
        this.contenType = contenType;
    }

    public List<Object> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<Object> attachments) {
        this.attachments = attachments;
    }

    @Override
    public String toString() {
        return "Mail{" +
                "mailFrom='" + mailFrom + '\'' +
                ", mailTo='" + mailTo + '\'' +
                ", mailCc='" + mailCc + '\'' +
                ", mailBcc='" + mailBcc + '\'' +
                ", mailSubject='" + mailSubject + '\'' +
                ", mailContent='" + mailContent + '\'' +
                ", contenType='" + contenType + '\'' +
                ", attachments=" + attachments +
                '}';
    }
    


}
