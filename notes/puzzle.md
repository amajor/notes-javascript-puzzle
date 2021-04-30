Write one Javascript statement on the indicated line that will 
make the printed number always be between **10** and **20**.

```js [1-13]
let x = 2;
let y = 8;
const a = function(b) {
  return function(c) {
    return x + y + Math.abs(b) + c;
  }; 
};

// ***** Statement will go here *****

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));
```

==========

# Where do we start?

==========

# Let's break it down...

==========

We initialize `x` and `y`.

<pre data-id="code-animation"><code data-trim data-line-numbers="1-2">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = a(x);
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

==========

We initialize `a`.

<pre data-id="code-animation"><code data-trim data-line-numbers="3-7">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = a(x);
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

==========

We initialize `fn` using `a` and `x`.

<pre data-id="code-animation"><code data-trim data-line-numbers="1,3-7,11">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = a(x);
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

==========

We initialize `fn` using `a` and `x`.

<pre data-id="code-animation"><code data-trim data-line-numbers="11-15">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(2) {
    return function(c) {
      return x + y + Math.abs(2) + c;
    }; 
  };
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

Note: Let's just substitute so we can see what we're working with.

==========

We initialize `fn` using `a` and `x`.

<pre data-id="code-animation"><code data-trim data-line-numbers="13">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(2) {
    return function(c) {
      return x + y + Math.abs(2) + c;
    }; 
  };
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

Note: Let's just substitute so we can see what we're working with.

==========

We initialize `fn` using `a` and `x`.

<pre data-id="code-animation"><code data-trim data-line-numbers="11-13">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

Note: Absolute value of `2` is just `2`.

==========

Now we're getting somewhere!

<pre data-id="code-animation"><code data-trim data-line-numbers>
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

==========

The output calculation is harder to follow.

<pre data-id="code-animation"><code data-trim data-line-numbers="15">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  console.log(fn(Math.random() * 10));
</code></pre>

==========

Let's extract our printed number to variables.

<pre data-id="code-animation"><code data-trim data-line-numbers="15-17">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  input = Math.random() * 10;
  console.log(fn(input));
</code></pre>

==========

Let's extract our printed number to variables.

<pre data-id="code-animation"><code data-trim data-line-numbers="15-17">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = fn(input);
  console.log(printedNumber);
</code></pre>

==========

Let's look at how our printedNumber is constructed.

<pre data-id="code-animation"><code data-trim data-line-numbers="16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = fn(input);
  console.log(printedNumber);
</code></pre>

==========

Let's drop our definition of `fn` into our `printedNumber`.

<pre data-id="code-animation"><code data-trim data-line-numbers="11-13|16|12">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = fn(input);
  console.log(printedNumber);
</code></pre>

==========

Let's drop our definition of `fn` into our `printedNumber`.

<pre data-id="code-animation"><code data-trim data-line-numbers="16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + 2 + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = x + y + 2 + input;
  console.log(printedNumber);
</code></pre>

==========

Let's drop `input` into our `printedNumber`.

<pre data-id="code-animation"><code data-trim data-line-numbers="15|16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + Math.abs(2) + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = x + y + 2 + ( input );
  console.log(printedNumber);
</code></pre>

==========

Let's drop `input` into our `printedNumber`.

<pre data-id="code-animation"><code data-trim data-line-numbers="16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + Math.abs(2) + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = x + y + 2 + ( Math.random() * 10 );
  console.log(printedNumber);
</code></pre>

==========

# Time to look at `x`

==========

`x` is defined _AFTER_ the line we can edit.

<pre data-id="code-animation"><code data-trim data-line-numbers="14|9|14|14,16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + Math.abs(2) + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = x + y + 2 + Math.random() * 10;
  console.log(printedNumber);
</code></pre>

Note:  So `x = 4` in our `printedNumber`.

==========

`x = 4`.

<pre data-id="code-animation"><code data-trim data-line-numbers="14,16|16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + Math.abs(2) + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = 4 + y + 2 + Math.random() * 10;
  console.log(printedNumber);
</code></pre>

Note:  So `x = 4` in our `printedNumber`.

==========

<pre data-id="code-animation"><code data-trim data-line-numbers="16">
  let x = 2;
  let y = 8;
  const a = function(b) {
    return function(c) {
      return x + y + Math.abs(b) + c;
    }; 
  };

  // ***** Statement will go here *****

  const fn = function(c) {
    return x + y + Math.abs(2) + c;
  };
  x = 4;
  input = Math.random() * 10;
  printedNumber = y + 6 + Math.random() * 10;
  console.log(printedNumber);
</code></pre>

==========

# Now we have something we can work with!

<small>`printedNumber = y + 6 + Math.random() * 10;`</small>

==========

# What was our goal?

==========

> make the printed number always be between **10** and **20**

...and we know that...

<small>`printedNumber = y + 6 + Math.random() * 10;`</small>

==========

`10  <  ( printedNumber )  <  20`

==========

`10  <  ( y + 6 + Math.random()*10 )  <  20`

==========

`10  <  ( y + 6 + Math.random()*10 )  <  20`

We can say that our edges are...

<pre data-id="code-animation"><code data-trim>
  // Minimum Edge
  10 < y + 6 + Math.random() * 10

  // Maximum Edge
  20 > y + 6 + Math.random() * 10
</code></pre>

==========


`10  <  ( y + 6 + Math.random()*10 )  <  20`

We can say that our edges are...

<pre data-id="code-animation"><code data-trim>
  // Minimum Edge
  10 = y + 6 + Math.random() * 10

  // Maximum Edge
  20 = y + 6 + Math.random() * 10
</code></pre>

==========

# Math.random()

> The [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)

Note: The value of `Math.random()` will be a number between 0 and 1.

We can treat `0` and `1` as our `minimum` and `maximum` values for `Math.random()`.

==========

## Minimum Edge

Minimum edge for `Math.random() = 0`

```js
// 10 = y + 6 + Math.random() * 10
// 10 = y + 6 + (     0     ) * 10
// 10 = y + 6 + 0
// y = 10 - 6 - 0
y = 4 // <-- our minimum edge will be found when y = 4
```

==========

## Maximum Edge

Maximum edge for `Math.random() = 1`

```js
// 20 = y + 6 + Math.random() * 10
// 20 = y + 6 + (     1     ) * 10
// 20 = y + 6 + 10
// y = 20 - 6 - 10
y = 4  // <-- our maximum edge will be found when y = 4
```

Note: We know that `Math.random()` will never reach `0` or `1` but will always be in between, so with `y = 4` set in our code, we can be confident that our printed number will always be between `10` and `20`.

==========

# `y = 4`

==========

Write one Javascript statement on the indicated line that will 
make the printed number always be between **10** and **20**.

```js [9]
let x = 2;
let y = 8;
const a = function(b) {
  return function(c) {
    return x + y + Math.abs(b) + c;
  }; 
};

y = 4; // Our single statement!

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));
```
