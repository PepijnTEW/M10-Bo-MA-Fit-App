@extends('layouts.cms')
@section('title', 'Challenge aanpassen - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">Challenge aanpassen</h1>
        <div class="text-muted small">Bewerk de challenge: <strong>{{ $challenge->name }}</strong></div>
    </div>
    <a href="{{ route('cms.challenges.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.challenges.update', $challenge) }}" class="row g-3">
    @csrf
    @method('PUT')

    <div class="col-md-6">
        <label class="form-label">Naam</label>
        <input
            type="text"
            name="name"
            id="name"
            class="form-control @error('name') is-invalid @enderror"
            value="{{ old('name', $challenge->name) }}"
        >
        @error('name')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Needed value (1-10)</label>
        <input
            type="number"
            name="needed_value"
            class="form-control @error('needed_value') is-invalid @enderror"
            value="{{ old('needed_value', $challenge->needed_value) }}"
            min="1"
            max="10"
        >
        @error('needed_value')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.challenges.index') }}" class="btn btn-outline-secondary">Annuleren</a>
    </div>
</form>
@endsection
