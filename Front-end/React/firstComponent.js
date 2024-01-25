/*
Sure, let's break down the concept of a "component" in React in a simple way:

Imagine LEGO Bricks:

In React, a component is like a LEGO brick.
LEGO bricks are small, reusable pieces that you can put together to build something bigger.
Components in React:

In React, a component is a small, self-contained piece of your user interface.
It can be a button, a form, a header, or any other part of your webpage.
Reusable Building Blocks:

Components are reusable. Once you create a component, you can use it as many times as you want.
This makes your code organized and easy to manage, just like using LEGO bricks to build different things.*/

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
