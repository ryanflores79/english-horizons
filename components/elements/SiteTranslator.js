import Script from 'next/script'

export default function SiteTranslator({ id }) {
    if (!id) return null;
    return (
        <>
          <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
          <div id={id}></div>
          <script dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit() {
          new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, '${id}');
          }`}}></script>
        </>
    );
}
