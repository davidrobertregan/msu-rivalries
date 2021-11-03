# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating teams..."

msu = Team.create(name: "Michigan State", mascot: "Spartans", cheer: "Go Green", logo_url:"http://brand.msu.edu/_files/images/spartan-helmet-og.png")
michigan = Team.create(name: "Michigan", mascot: "Wolverines", cheer: "Go Blue", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Michigan_Wolverines_Logo.svg/1280px-Michigan_Wolverines_Logo.svg.png")
notre_dame = Team.create(name: "Notre Dame", mascot: "Fighting Irish", cheer: "Go Irish", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/1200px-Notre_Dame_Fighting_Irish_logo.svg.png")

puts "creating rivalries..."

nd_rival = Rivalry.create(name: "Michigan State-Notre Dame", trophy: "Megaphone Trophy", team_one: Team.third, team_two: Team.first)