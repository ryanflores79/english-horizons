import Script from 'next/script'

export default function SiteTranslator({ id, pageLanguage, includedLanguages }) {
    if (!id) return null;
    pageLanguage = pageLanguage ?? 'en';
    includedLanguages = includedLanguages ?? '';
    return (
        <>
          <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
          <div id={id}></div>
          <script dangerouslySetInnerHTML={{ __html: `function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: '${pageLanguage}', includedLanguages: '${includedLanguages}', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, '${id}');
          }`}}></script>
        </>
    );
}
