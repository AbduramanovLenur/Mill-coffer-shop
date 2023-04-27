export default function({$pinia, $toast, redirect}) {
  if (!$pinia.state.value.authStore.token) {
    redirect('/');
    $toast.error("Вы не авторизированы");
  }
}
