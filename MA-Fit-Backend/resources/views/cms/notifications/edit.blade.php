@extends('layouts.cms')
@section('title', 'notification aanpassen - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">Notification aanpassen</h1>
        <div class="text-muted small">Bewerk de notification: <strong>{{ $notification->title }}</strong></div>
    </div>
    <a href="{{ route('cms.notifications.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.notifications.update', $notification) }}" class="row g-3">
    @csrf
    @method('PUT')

    <div class="col-md-6">
        <label class="form-label">Title</label>
        <input
            type="text"
            name="title"
            id="title"
            class="form-control @error('title') is-invalid @enderror"
            value="{{ old('title', $notification->title) }}"
        >
        @error('title')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Content</label>
        <input
            type="text"
            name="content"
            id="content"
            class="form-control @error('email') is-invalid @enderror"
            value="{{ old('content', $notification->content) }}"
        >
        @error('content')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.notifications.index') }}" class="btn btn-outline-secondary">Annuleren</a>

        <div class="ms-auto">
            <form action="{{ route('cms.notifications.destroy', $notification) }}"
                  method="POST"
                  onsubmit="return confirm('Weet je zeker dat je deze notification wilt verwijderen?');">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-outline-danger">
                    Verwijderen
                </button>
            </form>
        </div>
    </div>
</form>

@endsection
