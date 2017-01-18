package com.spring.boot.angular2.beans;

import java.util.Date;

public class Authorization {

	private String userId;
	private boolean authenticated;

	private Date date;

	private boolean hasHomePage;
	private boolean hasDashboardPage;
	private boolean hasHeroesPage;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public boolean isAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean isHasHomePage() {
		return hasHomePage;
	}

	public void setHasHomePage(boolean hasHomePage) {
		this.hasHomePage = hasHomePage;
	}

	public boolean isHasDashboardPage() {
		return hasDashboardPage;
	}

	public void setHasDashboardPage(boolean hasDashboardPage) {
		this.hasDashboardPage = hasDashboardPage;
	}

	public boolean isHasHeroesPage() {
		return hasHeroesPage;
	}

	public void setHasHeroesPage(boolean hasHeroesPage) {
		this.hasHeroesPage = hasHeroesPage;
	}

	@Override
	public String toString() {
		return "Authorization [userId=" + userId + ", authenticated=" + authenticated + ", date=" + date
				+ ", hasHomePage=" + hasHomePage + ", hasDashboardPage=" + hasDashboardPage + ", hasHeroesPage="
				+ hasHeroesPage + "]";
	}

}
