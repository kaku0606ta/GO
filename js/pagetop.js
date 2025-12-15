// jQuery DOM ready
$(function(){
	// 「ページトップへ戻るボタン」の要素を隠します
	$('#pagetop').hide();
	// スクロールした場合のアクションが記されています
	$(window).scroll(function(){
		// スクロール位置が200pxを超えた場合に「ページトップへ戻るボタン」をフェードインで出現させる
		if ($(this).scrollTop() > 100) {
			$('#pagetop').fadeIn();
		}
		// スクロール位置が200px以下の場合は「ページトップへ戻るボタン」を消しておく（フェードアウトで消える）
		else {
			$('#pagetop').fadeOut();
		}
	});
	// 「ページトップへ戻るボタン」をクリックした場合のページトップへ戻るスピードの速さが記されています
	$('#pagetop').click(function(){
		$('html,body').animate({
			scrollTop: 0 }, 500);
		return false;
	});
});