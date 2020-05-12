<script>
  export let name;
  import * as Factory from "@rdfjs/data-model";
  import Dataset from "@rdfjs/dataset";
  import { SimpleLiteralEditor, HtmlEditor, 
      BlankNodeEditor, NamedNodeEditor, 
      ExistingTermEditor, TermEditor,
      QuadEditor, DatasetEditor } from "rdfjs-svelte";

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
  let namedNode2 = Factory.namedNode("http://example.org/other");
  let newValue = null;
  let newValue2 = null;
  let quad1 = null;
  //$: console.log("quad1", quad1);
  window.q1 = quad1;
  let dataset = Dataset.dataset([]);
  $: console.log("dataset", dataset);
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
  Same: <ExistingTermEditor bind:value={htmlLiteral} />
  <hr>
  <SimpleLiteralEditor bind:value={literal} />
  Same: <ExistingTermEditor bind:value={literal} />

  <NamedNodeEditor bind:value={namedNode1} /><br />
  Same: <ExistingTermEditor bind:value={namedNode1} />

  <BlankNodeEditor bind:value={blankNode1} />
  same: <ExistingTermEditor bind:value={blankNode1} />

  <TermEditor bind:value={newValue} />
  Same: <TermEditor bind:value={newValue} />

  Limited types:
  <TermEditor bind:value={newValue2} termTypes="['BlankNode', 'NamedNode', 'DefaultGraph']" />

  Existing resource:
    <TermEditor bind:value={namedNode2} />

  <QuadEditor bind:value={quad1} labels />
  Same: <QuadEditor bind:value={quad1} />

  <h2>Dataset</h2>
  <DatasetEditor bind:value={dataset} />
  <button on:click={e => alert('ddd:' + literal.value)}>click</button>
</main>
