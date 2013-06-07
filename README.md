# Chaplin
Twitter bot for Chaplin's wise remarks.


## Generate
### Add schema information to models (Run annotate)
    $ bundle exec annotate --show-indexes --exclude tests,fixtures

### Generate entity-relationship diagram (Run erd)
    $ brew install cairo pango graphviz
    $ bundle exec rake erd
    $ open ERD.pdf


## Test
### Run migration
    $ bundle exec rake db:migrate && bundle exec rake db:test:prepare

### Run rspec
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
