# Chaplin [![Build Status](https://travis-ci.org/ruedap/chaplin.png?branch=master)](https://travis-ci.org/ruedap/chaplin) [![Dependency Status](https://gemnasium.com/ruedap/chaplin.png)](https://gemnasium.com/ruedap/chaplin)

Twitter bot for Chaplin's wise remarks (Japanese).

[![chaplin](https://dl.dropboxusercontent.com/u/281168/images/github-chaplin-readme.jpg)](http://drnorth.wordpress.com/2011/04/16/picture-of-the-week-73-charlie-chaplin-colour-portraits-by-charles-c-zoller/)
(Portraits by Charles C. Zoller)

## Generate

### Add schema information to models
    $ bundle exec annotate --show-indexes --exclude tests,fixtures

### Generate entity-relationship diagram
    $ brew install cairo pango graphviz
    $ bundle exec rake erd
    $ open ERD.pdf


## Test

### Migration
    $ bundle exec rake db:migrate && bundle exec rake db:test:prepare

### RSpec
    $ bundle exec rake spec


## Deploy

### Heroku application settings
    $ git push heroku master
    $ heroku config:add TZ="Asia/Tokyo"
    $ heroku config:add TWITTER_CONSUMER_KEY=""
    $ heroku config:add TWITTER_CONSUMER_SECRET=""
    $ heroku config:add TWITTER_OAUTH_TOKEN=""
    $ heroku config:add TWITTER_OAUTH_TOKEN_SECRET=""
    $ heroku run rake db:migrate
    $ heroku run rake db:seed
    $ heroku run rake tweet:shuffle

### Heroku scheduler settings
    $ heroku addons:add scheduler:standard
    $ heroku addons:open scheduler


## License
http://ruedap.mit-license.org/2011
