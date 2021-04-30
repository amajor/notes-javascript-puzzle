# Initial Setup

Thank you to [Martino Mensio](https://github.com/MartinoMensio) for this [easy-to-follow method](https://martinomensio.medium.com/how-to-host-reveal-js-slides-on-github-pages-and-have-a-tidy-repository-1a363944c38d)!

```sh
# Initialize the Repository
git init

# Add Reveal.js as a Submodule
git submodule add https://github.com/hakimel/reveal.js.git revealjs
```

Now pick a released version to link to. 
Take a look https://github.com/hakimel/reveal.js/releases to select a valid tag.

```sh
# Pick a released version. This example uses 
cd revealjs && git checkout tags/4.1.0 && cd ..
```

# Update Reveal.js Version

Navigate into the submodule.

```sh
cd revealjs
```

Use git to checkout the newest tag version.
This example uses version `4.1.1`.

```sh
git checkout tags/4.1.1
```

Go back to your repository and run it to test that everything is working.

```sh
cd ..
```

Add the update to your branch and commit!

```sh
git add revealjs && git commit -m “Updated reveal.js version” && git push
```
