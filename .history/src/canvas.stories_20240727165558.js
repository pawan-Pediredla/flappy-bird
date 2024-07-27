// src/canvas.stories.js

import { html } from 'lit-html'; // Using lit-html for templating

export default {
  title: 'Flappy Bird/Canvas',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => html`
  <header>
    <h1>Floppy Bird</h1>
    <div class="score-container">
      <div id="bestScore">Best: 0</div>
      <div id="currentScore">Current: 0</div>
    </div>
  </header>
  <canvas id="canvas"></canvas>
  <script src="index.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-family: 'Press Start 2P', cursive;
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #70c5ce; /* Background color for the game */
    }
    header {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 0;
    }
    h1 {
      background: url("https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png") 0% 340px;
      padding: 1.2rem 0;
      margin: 0;
    }
    .score-container {
      display: flex;
      justify-content: space-between;
      padding: 8px 6px;
      background: #5EE270;
    }
    canvas {
      display: block;
    }
  </style>
`;
