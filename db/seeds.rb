require 'csv'

puts "creating teams..."

msu = Team.create(name: "Michigan State", mascot: "Spartans", cheer: "Go Green", logo_url:"http://brand.msu.edu/_files/images/spartan-helmet-og.png")
michigan = Team.create(name: "Michigan", mascot: "Wolverines", cheer: "Go Blue", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Michigan_Wolverines_Logo.svg/1280px-Michigan_Wolverines_Logo.svg.png")
notre_dame = Team.create(name: "Notre Dame", mascot: "Fighting Irish", cheer: "Go Irish", logo_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/1200px-Notre_Dame_Fighting_Irish_logo.svg.png")

puts "creating rivalries..."

paul = "https://cdn.shopify.com/s/files/1/0085/8402/products/paul-bunyan-cover_4a7fb092-0e9e-4a7b-9249-83a2e049d9bf_900x.png?v=1535572432"
megaphone = "https://i.pinimg.com/originals/88/7b/99/887b998c126cc0000388e312e46b3157.jpg"


nd_rival = Rivalry.create(name: "Michigan State-Notre Dame", trophy: "Megaphone Trophy", trophy_img_url: megaphone, team_one: msu, team_two: notre_dame, description: "The ND-MSU description will be here!")
mich_rival = Rivalry.create(name: "Michigan-Michigan State", trophy: "Paul Bunyan Trophy", trophy_img_url: paul, team_one: michigan, team_two: msu, description: "The Mich-MSU description will be here!")

puts "seeding games..."

# i'll need to grab seed date from a csv file. 
# csv file:
# - rivalry association - winning and losing team association, hightlights (can always update these)

def loser losing_team
    if losing_team == "msu"
        Team.find_by(name: "Michigan State")
    else
        Team.find_by(name: "Michigan")
    end
end

def winner winning_team
    if winning_team == "msu"
        Team.find_by(name: "Michigan State")
    else
        Team.find_by(name: "Michigan")
    end
end

def notes notes_content
    if notes_content == "no content"
        nil
    else
        notes_content
    end
end

CSV.foreach('Mich-MSU.csv') do |row|
    date = row[0]
    location = row[1]
    winning_team = row[2]
    losing_team = row[3]
    score = row[4]
    notes_content = row[5]

    Game.create(date: date, score: score, location: location, loser: loser(losing_team), winner: winner(winning_team), notes: notes(notes_content), rivalry: mich_rival)

end