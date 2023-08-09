// tab-contnets要素のtab要素のidがtab1以外の内容を非表示にする。
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

// .removeClass()は、クラス属性が設定されているHTML要素からクラスを削除するメソッド
// .addClass()は、任意のHTML要素にクラス属性を追加できるメソッド
// .attr()は、HTML要素の属性を取得したり設定できるメソッド
// .show()は、要素を表示するメソッド