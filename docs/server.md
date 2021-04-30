# Install Jekyll

```sh
gem install jekyll bundler
```

Then start your server using

```sh
bundle exec jekyll serve
```

-------------------------------------------------------------------------------

## Troubleshooting

> ERROR:  While executing gem ... (Gem::FilePermissionError)
>         You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.

### Method 0

This is least desirable, but may be the easiest option:

```sh
sudo gem install jekyll bundler
```

### Method 1

```sh
gem install bundler --user-install
```

Add to your `$PATH`

```sh
# Example (replace with actual version)
echo 'export PATH="~/.gem/ruby/<ruby version>/bin:$PATH"' >> ~/.bash_profile

# Refresh your terminal (don't need to relaunch)
source ~/.bash_profile
```

Now try installing jekyll again.

```sh
gem install jekyll bundler
```

### Method 2

Read [The Definitive Guide To Installing Ruby Gems on a Mac](https://www.moncefbelyamani.com/the-definitive-guide-to-installing-ruby-gems-on-a-mac/).

```sh
# Install ruby
brew install ruby

# You may need (if on the M1 Mac)...
arch -arm64 brew install ruby
```

Then set your PATH.

```sh
##### For Bash #####
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

# Refresh your terminal (don't need to relaunch)
source ~/.bash_profile

##### For ZSH #####
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

# Refresh your terminal (don't need to relaunch)
source ~/.zshrc
```

Then relaunch your terminal.

Confirm you are on the correct version of ruby:

```sh
which ruby
```

Now try installing jekyll again.

```sh
gem install jekyll bundler
```
