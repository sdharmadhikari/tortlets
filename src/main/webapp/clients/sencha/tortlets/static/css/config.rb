# Get the directory that this configuration file exists in

puts "This is custom config.rb written for Tortlets application" 
curr_dir = File.dirname(__FILE__)
#sencha_dir = File.dirname("/Users/sudhir/MyPrograms/touch-2.2.0/resources/sass/sencha-touch.scss")
sencha_dir = "/Users/sudhir/MyPrograms/touch-2.2.0/"

# Load the sencha-touch framework automatically.
load File.join(sencha_dir, 'resources/themes')

# Compass configurations
asset_cache_buster :none
fonts_path = File.join(sencha_dir, 'resources/themes/fonts/')
sass_path = curr_dir 
css_path = curr_dir
environment  = :development
output_style = :expanded
