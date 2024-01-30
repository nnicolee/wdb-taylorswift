import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Home() {

  return (
    <>
      <div class="body-background">
        <h1> Taylor Swift</h1>
        <h1>on Tour</h1>
        <div className="instructions">
          <a href="/merch" className="merch-button">
            See Her Perform
          </a>
        </div>
      </div>
    </>
  );
}
