require 'csv'

puts "seeding users... "

david = User.create(username: "davidregan", email: "davidrobertregan@gmail.com", password: "password" admin: true)
meltucker = User.create(username: "meltucker", email: "meltucker@gmail.com", password: "password")
mark_dantonio = User.create(username: "mark_dantonio", email: "mark@gmail.com", password: "password")

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

    mich_rival_desc = "The Michigan–Michigan State football rivalry is an American college football rivalry between the University of Michigan Wolverines and the Michigan State University Spartans. The teams first played in 1898 and have met 114 times. The game has now been played uninterrupted, every year since 1945. The winner of each year's game receives the Paul Bunyan – Governor of Michigan Trophy, a four-foot wooden statue of a lumberjack that was first presented in 1953 to commemorate Michigan State's beginning football competition as a member of the Big Ten Conference."
    nd_rival_desc = "The Michigan State–Notre Dame football rivalry is an American college football rivalry between the Michigan State Spartans and Notre Dame Fighting Irish. The first game between the teams took place on November 25, 1897. Since 1949, the teams competed for the Megaphone Trophy, a trophy introduced by the Alumni Clubs of Notre Dame and Michigan State to be presented to the winner of the game. The rivalry includes several notable games, such as the 1966 game, arguably one of the greatest college football games ever played. Notre Dame currently leads the series."
    indiana_rival_desc = "The Indiana–Michigan State football rivalry is an American college football rivalry between the Indiana Hoosiers football team of Indiana University and Michigan State Spartans football team of Michigan State University. The Old Brass Spittoon is the trophy that is annually awarded to the winner of the game. It was first presented in 1950."
    psu_rival_desc = "When Penn State joined the Big Ten Conference in 1993, the Nittany Lions and Spartans were designated as permanent rivals, and met each other for the trophy in the last week of conference play. The trophy, designed by former Michigan State coach George Perles, features pictures of Penn State's Old Main and Michigan State's Beaumont Tower, as well as figurines of The Spartan and Nittany Lion Shrine statues. The trophy is infamous for its unwieldiness and hodgepodge appearance."

    mich_rival = Rivalry.create(name: "Michigan", trophy: "Paul Bunyan Trophy", trophy_img_url: paul, team_one: michigan, team_two: msu, description: mich_rival_desc)

    nd_rival = Rivalry.create(name: "Notre Dame", trophy: "Megaphone Trophy", trophy_img_url: megaphone, team_one: msu, team_two: notre_dame, description: nd_rival_desc)

    indiana_rival = Rivalry.create(name: "Indiana", trophy: "Old Brass Spittoon", trophy_img_url: spittoon, team_one: indiana, team_two: msu, description: indiana_rival_desc)

    psu_rival = Rivalry.create(name: "Penn State", trophy: "Land Grant Trophy", trophy_img_url: land_grant, team_one: psu, team_two: msu, description: psu_rival_desc)


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

david.favorites.create(game: mich_rival.games.last)
david.favorites.create(game: indiana_rival.games.last)

puts "...creating comments"

david.comments.create(game: Game.last, content: "What a game! Go green!")
meltucker.comments.create(game: mich_rival.games.find_by(date: "10/30/2021"), content: "Keep choppin'")
mark_dantonio.comments.create(game: mich_rival.games.find_by(date: "10/17/2015"), content: "Whoa!!! He has trouble with the snap! And the ball is free!")

puts "done ✅"