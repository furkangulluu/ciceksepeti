<template>
  <div>
    <ul class="breadcrumb">
      <li><a href="#">ÇiçekSepeti Market</a></li>
      <li><a href="#">İstanbul</a></li>
      <li>ÇiçekSepeti BreadCrumb</li>
    </ul>
  </div>
</template>

<style lang="scss">
ul.breadcrumb {
  padding: 10px 0;
  list-style: none;
  background: none;
  position: relative;

  li {
  display: inline;
  font-size: 10px;

    a {
    color: #0275d8;
    text-decoration: none;

      &:hover {
        color: #01447e;
        text-decoration: underline;
      }
    }
  }

  li+li:before {
  padding: 8px;
  color: black;
  content: ">";
  }
}
</style>
