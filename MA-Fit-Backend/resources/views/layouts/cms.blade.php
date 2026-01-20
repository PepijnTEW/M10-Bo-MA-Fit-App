{{-- resources/views/layouts/cms.blade.php --}}
<!doctype html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'CMS')</title>

    {{-- Bootstrap 5 (CDN) --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body { background: #f6f7fb; }
        .sidebar {
            min-height: 100vh;
            background: #111827;
            color: #fff;
        }
        .sidebar a {
            color: rgba(255,255,255,.85);
            text-decoration: none;
        }
        .sidebar a:hover {
            color: #fff;
        }
        .nav-pill-active {
            background: rgba(255,255,255,.12);
            border-radius: .5rem;
        }
        .content-wrap {
            padding: 24px;
        }
        .card-soft {
            border: 1px solid rgba(17, 24, 39, .08);
            border-radius: 14px;
            box-shadow: 0 6px 20px rgba(17, 24, 39, .06);
        }
    </style>

    @stack('head')
</head>
<body>

<div class="container-fluid">
    <div class="row">

        {{-- Sidebar --}}
        <aside class="col-12 col-md-3 col-lg-2 sidebar p-3">
            <div class="d-flex align-items-center gap-2 mb-4">
                <div class="rounded-circle bg-light" style="width:10px;height:10px;"></div>
                <div class="fw-semibold">MA Fit CMS</div>
            </div>

            <nav class="d-grid gap-2">
                <a class="p-2 {{ request()->routeIs('cms.pillars.*') ? 'nav-pill-active' : '' }}"
                   href="{{ route('cms.pillars.index') }}">
                    Pijlers
                </a>
                <a class="p-2 {{ request()->routeIs('cms.users.*') ? 'nav-pill-active' : '' }}"
                   href="{{ route('cms.users.index') }}">
                    Users
                </a>
                <a class="p-2 {{ request()->routeIs('cms.notifications.*') ? 'nav-pill-active' : '' }}"
                   href="{{ route('cms.notifications.index') }}">
                    Notifications
                </a>

                {{-- later uitbreiden --}}
                {{-- <a class="p-2 {{ request()->routeIs('cms.tips.*') ? 'nav-pill-active' : '' }}" href="#">Tips</a> --}}
                {{-- <a class="p-2" href="#">Users</a> --}}
            </nav>

            <hr class="border-secondary my-4">

            <div class="small text-secondary">
                Ingelogd als:
                <div class="text-white">
                    {{ auth()->check() ? auth()->user()->name : 'Gast' }}
                </div>
            </div>

            <div class="mt-3">
                {{-- Optioneel: logout (als je auth routes hebt) --}}
                {{-- <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button class="btn btn-sm btn-outline-light w-100">Logout</button>
                </form> --}}
            </div>
        </aside>

        {{-- Main content --}}
        <main class="col-12 col-md-9 col-lg-10 content-wrap">
            <div class="card card-soft">
                <div class="card-body">

                    {{-- Flash messages --}}
                    @if(session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    @if(session('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif

                    {{-- Validation errors --}}
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <div class="fw-semibold mb-1">Er ging iets mis:</div>
                            <ul class="mb-0">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    @yield('content')

                </div>
            </div>
        </main>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
@stack('scripts')
</body>
</html>
