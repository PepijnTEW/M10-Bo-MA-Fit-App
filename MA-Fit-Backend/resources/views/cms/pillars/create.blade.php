{{-- resources/views/cms/pillars/create.blade.php --}}
@extends('layouts.cms')
@section('title', 'Nieuwe pijler - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">Nieuwe pijler</h1>
        <div class="text-muted small">Maak een nieuwe pijler aan.</div>
    </div>
    <a href="{{ route('cms.pillars.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.pillars.store') }}" class="row g-3">
    @csrf

    <div class="col-md-6">
        <label class="form-label">Naam</label>
        <input
            type="text"
            name="name"
            id="name"
            class="form-control @error('name') is-invalid @enderror"
            value="{{ old('name') }}"
            required
        >
        @error('name')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Slug</label>
        <input
            type="text"
            name="slug"
            id="slug"
            class="form-control @error('slug') is-invalid @enderror"
            value="{{ old('slug') }}"
            required
        >
        <div class="form-text">Wordt automatisch gevuld, maar je mag hem aanpassen.</div>
        @error('slug')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12">
        <label class="form-label">Beschrijving</label>
        <textarea
            name="description"
            rows="4"
            class="form-control @error('description') is-invalid @enderror"
            required
        >{{ old('description') }}</textarea>
        @error('description')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Kleur</label>
        <div class="input-group">
            <input
                type="color"
                id="colorPicker"
                class="form-control form-control-color"
                value="{{ old('color', '#22c55e') }}"
                title="Kies kleur"
                style="max-width:64px;"
            >
            <input
                type="text"
                name="color"
                id="colorText"
                class="form-control @error('color') is-invalid @enderror"
                value="{{ old('color', '#22c55e') }}"
                required
            >
            @error('color')<div class="invalid-feedback d-block">{{ $message }}</div>@enderror
        </div>
        <div class="form-text">Gebruik hex, bijv. #22c55e</div>
    </div>

    <div class="col-md-6">
        <label class="form-label">Needed value (1-10)</label>
        <input
            type="number"
            name="needed_value"
            class="form-control @error('needed_value') is-invalid @enderror"
            value="{{ old('needed_value', 5) }}"
            min="1"
            max="10"
            required
        >
        @error('needed_value')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.pillars.index') }}" class="btn btn-outline-secondary">Annuleren</a>
    </div>
</form>

@push('scripts')
<script>
    function slugify(text) {
        return text
            .toString()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
    }

    const nameInput = document.getElementById('name');
    const slugInput = document.getElementById('slug');

    // Alleen auto-sluggen als user de slug nog niet zelf heeft aangepast
    let slugTouched = false;
    slugInput.addEventListener('input', () => slugTouched = true);

    nameInput.addEventListener('input', () => {
        if (!slugTouched) slugInput.value = slugify(nameInput.value);
    });

    // Color sync
    const picker = document.getElementById('colorPicker');
    const colorText = document.getElementById('colorText');

    picker.addEventListener('input', () => colorText.value = picker.value);
    colorText.addEventListener('input', () => {
        if (/^#[0-9a-fA-F]{6}$/.test(colorText.value)) picker.value = colorText.value;
    });
</script>
@endpush
@endsection
