.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}


@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #0f0d0d;
  overflow: hidden;
  
}
li{
  float: left;
}

li a {
  display: block;
  color: #fff;
  padding: 15px 16px;
  text-decoration: none;
  text-align: center;

  
}

/* Change the link color on hover */
li a:hover {
  background-color: #555;
  color: white;
}

.container{
  margin-top: 50px;
}
