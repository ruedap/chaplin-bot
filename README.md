# chaplin

## Test
### Run migration
    $ bundle exec rake db:migrate && bundle exec rake db:test:prepare

### Run rspec
    $ bundle exec rake spec

## Add schema information to models (Run annotate)
    $ bundle exec annotate --show-indexes --exclude tests,fixtures

## Generate entity-relationship diagram (Run erd)
    $ brew install cairo pango graphviz
    $ bundle exec rake erd
    $ open ERD.pdf

