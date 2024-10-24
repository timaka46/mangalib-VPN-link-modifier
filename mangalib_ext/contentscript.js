const ChangeUrl = new URL(window.location.href);

if (ChangeUrl.hostname.endsWith('.me')) {
  ChangeUrl.hostname = ChangeUrl.hostname.replace('.me', '.org');
}

const ChangeLink = document.querySelector('a[href="https://mangalib.org"]');
if (ChangeLink) {
  ChangeLink.href = ChangeUrl.toString();
  ChangeLink.setAttribute('target', '_self');
} else {
  console.error("Mangalib link was not found.");
}
