require 'csv'

puts "seeding users... "

david = User.create(username: "davidregan", email: "davidrobertregan@gmail.com", password: "password")

puts "creating teams..."

    msu = Team.create(name: "Michigan State", mascot: "Spartans", cheer: "Go Green", logo_url:"http://brand.msu.edu/_files/images/spartan-helmet-og.png")
    michigan = Team.create(name: "Michigan", mascot: "Wolverines", cheer: "Go Blue", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Michigan_Wolverines_Logo.svg/1280px-Michigan_Wolverines_Logo.svg.png")
    notre_dame = Team.create(name: "Notre Dame", mascot: "Fighting Irish", cheer: "Go Irish", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/1200px-Notre_Dame_Fighting_Irish_logo.svg.png")
    indiana = Team.create(name: "Indiana", mascot: "Hoosiers", cheer: "Go Hoosiers", logo_url:"https://brandslogos.com/wp-content/uploads/thumbs/indiana-hoosiers-logo-vector.svg")
    psu = Team.create(name: "Penn State", mascot: "Nittany Lions", cheer: "We are! Penn State!", logo_url:"https://1000logos.net/wp-content/uploads/2017/11/penn-state-football-logo.jpg")
    tie = Team.create(name: "Tie")

puts "creating rivalries..."

    paul = "https://cdn.shopify.com/s/files/1/0085/8402/products/paul-bunyan-cover_4a7fb092-0e9e-4a7b-9249-83a2e049d9bf_900x.png?v=1535572432"
    megaphone = "https://i.pinimg.com/originals/88/7b/99/887b998c126cc0000388e312e46b3157.jpg"
    spittoon = "https://cdn.shopify.com/s/files/1/0085/8402/products/old-brass-spittoon-cover_355d77f5-e36b-4d6c-8a00-cea7f3d23697_600x.png?v=1535654017"
    land_grant = "https://i0.wp.com/www.nittanyturkey.com/wp-content/uploads/2006/11/land_grant_trophy_450.jpg"


    mich_rival = Rivalry.create(name: "Michigan - Michigan State", trophy: "Paul Bunyan Trophy", trophy_img_url: paul, team_one: michigan, team_two: msu, description: "The Mich-MSU description will be here!")

    nd_rival = Rivalry.create(name: "Michigan State - Notre Dame", trophy: "Megaphone Trophy", trophy_img_url: megaphone, team_one: msu, team_two: notre_dame, description: "The ND - MSU description will be here!")

    indiana_rival = Rivalry.create(name: "Michigan State - Indiana", trophy: "Old Brass Spittoon", trophy_img_url: spittoon, team_one: indiana, team_two: msu, description: "The Indiana - MSU description will be here!")

    psu_rival = Rivalry.create(name: "Michigan State - Penn State", trophy: "Land Grant Trophy", trophy_img_url: land_grant, team_one: psu, team_two: msu, description: "The PSU - MSU description will be here!")


puts "seeding games..."

    def loser losing_team
        Team.find_by(name: losing_team)
    end

    def winner winning_team
        Team.find_by(name: winning_team)
    end

    def notes notes_content
        if notes_content == "no content"
            nil
        else
            notes_content
        end
    end

puts "... michigan"

CSV.foreach('MSU-MICH.csv') do |row|
    date = row[0]
    location = row[1]
    winning_team = row[2]
    losing_team = row[3]
    score = row[4]
    notes_content = row[5]

    Game.create(date: date, score: score, location: location, loser: loser(losing_team), winner: winner(winning_team), notes: notes(notes_content), rivalry: mich_rival)

end

puts "...notre dame"

CSV.foreach('ND-MSU.csv') do |row|
    date = row[0]
    location = row[1]
    winning_team = row[2]
    losing_team = row[3]
    score = row[4]
    notes_content = row[5]

    Game.create(date: date, score: score, location: location, loser: loser(losing_team), winner: winner(winning_team), notes: notes(notes_content), rivalry: nd_rival)

end

puts "...indiana"

CSV.foreach('IU-MSU.csv') do |row|
    date = row[0]
    location = row[1]
    winning_team = row[2]
    losing_team = row[3]
    score = row[4]
    notes_content = row[5]

    Game.create(date: date, score: score, location: location, loser: loser(losing_team), winner: winner(winning_team), notes: notes(notes_content), rivalry: indiana_rival)

end

puts "...penn state"

CSV.foreach('PSU-MSU.csv') do |row|
    date = row[0]
    location = row[1]
    winning_team = row[2]
    losing_team = row[3]
    score = row[4]
    notes_content = row[5]

    Game.create(date: date, score: score, location: location, loser: loser(losing_team), winner: winner(winning_team), notes: notes(notes_content), rivalry: psu_rival)

end

puts "...creating Dave's favorites"

david.favorites.create(game: mich_rival.games.last, description: "Tuck comin!")
david.favorites.create(game: indiana_rival.games.last, description: "Cal Haladay with a pick 6!")

puts "done ✅"