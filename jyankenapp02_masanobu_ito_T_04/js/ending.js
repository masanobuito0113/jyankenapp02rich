

const phrases = [
    "ステージクリアおめでとう！",
    "ここまできたキミも、作った僕もえらい。",
    "これがセカイを変える、1歩目になりますように。"
  ];
  const animationDelay = 2500; // テキストが切り替わるまでの遅延時間（ミリ秒）
  let currentIndex = 0;
  
  function animateText() {
    const textElement = $("#ending_text h2");
    textElement.text(phrases[currentIndex]);
    textElement.fadeIn(500, function() {
      setTimeout(function() {
        textElement.fadeOut(500, function() {
          if (currentIndex === phrases.length - 1) {
            // アニメーション終了
            textElement.empty(); // テキストを空にする
            return;
          }
          currentIndex++;
          animateText();
        });
      }, animationDelay);
    });
  }
  
  $(document).ready(animateText);
