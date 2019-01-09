"use strict";
//here ts unable to find declaration of $, so the simpleist solution is to declare this
//but it has downside that ts don't know anything about this $ so it can't help us in any way
// declare var $: any;
//a better approach is to use type declaration file, we can create it manually but we can install it from @typed repo
$('button').on('click', function (e) {
    console.log(e);
});
