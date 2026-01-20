@extends('layouts.cms')
@section('title', 'Nieuwe melding - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">Nieuwe melding</h1>
        <div class="text-muted small">Maak een nieuwe melding aan.</div>
    </div>
    <a href="{{ route('cms.notifications.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.notifications.store') }}" class="row g-3">
    @csrf

    <div class="col-md-6">
        <label class="form-label">Title</label>
        <input
            type="text"
            name="title"
            id="title"
            class="form-control @error('title') is-invalid @enderror"
            value="{{ old('title') }}"
            required
        >
        @error('title')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12">
        <label class="form-label">Content</label>
        <textarea
            name="content"
            rows="4"
            class="form-control @error('content') is-invalid @enderror"
            required
        >{{ old('content') }}</textarea>
        @error('content')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.notifications.index') }}" class="btn btn-outline-secondary">Annuleren</a>
    </div>
</form>

@endsection
