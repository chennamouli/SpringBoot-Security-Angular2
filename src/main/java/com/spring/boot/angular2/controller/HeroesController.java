package com.spring.boot.angular2.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.boot.angular2.beans.Hero;

@Controller
@RequestMapping("/")
public class HeroesController extends BaseController {

	static int id = 0;
	static Map<Integer, Hero> heroesMap = new HashMap<Integer, Hero>();

	static {
		heroesMap.put(++id, new Hero(id, "Superman"));
		heroesMap.put(++id, new Hero(id, "Captain America"));
		heroesMap.put(++id, new Hero(id, "Spiderman"));
		heroesMap.put(++id, new Hero(id, "Hulk"));
		heroesMap.put(++id, new Hero(id, "Batman"));
	}

	@RequestMapping(value = { "/list" })
	public @ResponseBody Collection<Hero> list() {
		System.out.println("Retrieving the heroes list...");
		return heroesMap.values();
	}

	@RequestMapping(value = { "/view/{heroId}" })
	public @ResponseBody Hero view(@PathVariable int heroId) {
		System.out.println("Retrieving the hero from the list...");
		return heroesMap.get(heroId);
	}

	@RequestMapping(value = { "/add/{heroName}" })
	public @ResponseBody Map add(@PathVariable String heroName) {
		System.out.println("Adding to the heroes list...");
		Map resp = new HashMap<>();
		heroesMap.put(++id, new Hero(id, heroName));
		resp.put("status", true);
		resp.put("message", "Successfully added");
		return resp;
	}

	@RequestMapping(value = { "/delete/{heroId}" })
	public @ResponseBody static Map delete(@PathVariable int heroId) {
		System.out.println("Deleting the hero from the list: " + heroesMap);
		Map resp = new HashMap<>();

		if (StringUtils.isEmpty(heroId)) {
			resp.put("status", false);
			resp.put("message", "Please provide the hero id");
		} else {
			if (heroesMap.containsKey(heroId)) {
				heroesMap.remove(heroId);
				resp.put("status", true);
				resp.put("message", "Successfully deleted");
			} else {
				resp.put("status", false);
				resp.put("message", "Specified hero doesn't exist");
			}
		}
		return resp;
	}

	public static void main(String[] args) {
		
	}

}
