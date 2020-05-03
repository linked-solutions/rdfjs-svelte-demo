<script>
  export let name;
  import * as Factory from "@rdfjs/data-model";
  import { SimpleLiteralEditor, HtmlEditor, 
      BlankNodeEditor, NamedNodeEditor } from "rdfjs-svelte";

  let literal = Factory.literal(
    "My first literal",
    "http://www.w3.org/2001/XMLSchema#string"
  );
  let htmlLiteral = Factory.literal(
    "Hello <strong>world</strong>",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML"
  );
  //$: console.log("htmlLiteral", htmlLiteral);
  let blankNode1 = Factory.blankNode();
  let namedNode1 = Factory.namedNode("http://example.org/foo");
</script>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hoi {name}!</h1>
  <HtmlEditor bind:value={htmlLiteral} />
  Same: <HtmlEditor bind:value={htmlLiteral} />
  <hr>
  <SimpleLiteralEditor bind:value={literal} />
  same: <SimpleLiteralEditor bind:value={literal} />

  <NamedNodeEditor bind:value={namedNode1} /><br />
  Same: <NamedNodeEditor bind:value={namedNode1} />

  <BlankNodeEditor bind:value={blankNode1} />
  same: <BlankNodeEditor bind:value={blankNode1} />

  <!-- empty:
  <SimpleLiteralEditor /> -->
  <button on:click={e => alert('ddd:' + literal.value)}>click</button>
</main>
